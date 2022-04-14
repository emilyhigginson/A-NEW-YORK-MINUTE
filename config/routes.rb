Rails.application.routes.draw do
  
  resources :friends
  resources :favorites
  resources :reviews
  resources :spots
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/me', to: "users#me"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
