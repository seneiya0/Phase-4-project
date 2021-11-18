class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response

  def current_user  
    User.find_by(id: session[:user_id])
  end

  def render_record_not_found_response(object)
    render json: { error: "#{object}" }, status: :not_found
end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
