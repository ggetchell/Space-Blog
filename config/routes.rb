Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  

  get '/posts', to: "homes#index"
  get '/posts/new', to: "homes#index"
  get '/posts/:id', to: "homes#index"

  resources :posts, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :new, :show, :destroy] do
        resources :comments, only: [:create, :destroy]
      end
    end
  end
end