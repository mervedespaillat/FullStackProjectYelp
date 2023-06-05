Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'
  # post 'api/user', to: 'application#user'
  
  namespace :api, defaults: { format: :json } do
    get "recent3", to: "shops#recent3"
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :shops, only: [:show, :index]
  end

end
