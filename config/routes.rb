Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :groups, only: [:index, :create, :show, :destroy, :update]
    resources :users, only: :create do
      resources :friends, only: :index
    end
    resource :session, only: [:show, :create, :destroy]
    resources :expenses, only: [:index, :create, :show, :destroy, :update]
  end


  get '*path', 
  to: 'static_pages#frontend', 
  constraints: lambda {|req| !req.xhr? && req.format.html?}

  root to: 'static_pages#frontend'
end
