class UsersController < ApplicationController

  # Signup for new users
  def create
      user = User.create(user_params)
      if user.valid?
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
  end

  # Show all users
  def index
    render json: User.all
  end

  # Show a specific user as well as all of their posts
  def show
    if current_user
      render json: current_user, serializer: UserDetailSerializer, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
    # user = User.find_by(id: params[:id])
    # render json: user, 
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
