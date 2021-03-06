Rails.application.routes.draw do
  
  resources :post_tags
  resources :tags
  resources :posts
  resources :users, only: [:create, :index, :show]
  
  patch "/posts/:id/unlike", to: "posts#unlike"
  patch "/posts/:id/like", to: "posts#increment_likes"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/users/:username", to: "users#user_info"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
