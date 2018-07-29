Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  root 'hello_world#index'
  get 'places', to: 'hello_world#places'
  put 'reserve', to: 'hello_world#reserve'
  get 'hello_world', to: 'hello_world#index'
  get 'cancel', to: 'hello_world#cancel'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end