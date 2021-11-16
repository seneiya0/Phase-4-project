Rails.application.routes.draw do
  
  resources :post_tags
  resources :tags
  resources :posts
  resources :users, only: [:create, :index, :show]

  patch "/posts/:id/like", to: "posts#increment_likes"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
