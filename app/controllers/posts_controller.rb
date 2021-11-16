class PostsController < ApplicationController

    # before_action :authorize

    def index
        render json: Post.all
    end

    def show
        post = Post.find(params[:id])
        render json: post, status: :accepted, serializer: PostDetailSerializer
    end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post, status: :accepted
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    def increment_likes
        post = Post.find_by(id: params[:id])
        post.update(likes: post.likes + 1)
        render json: post, status: :accepted
    end
  
    private

    def post_params
        params.permit(:title, :image, :body, :likes, :user_id)
    end

    def authorize
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
