Rails.application.routes.draw do
  
  resources :post_tags
  resources :tags
  resources :posts
  resources :users, only: [:create, :index, :show]

  get "/me", to: "users#show"
  patch "/posts/:id/like", to: "posts#increment_likes"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
