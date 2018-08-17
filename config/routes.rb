Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: { registrations: 'registrations', omniauth_callbacks: 'omniauth_callbacks' }
  root 'wedding#index'
  get 'places', to: 'hello_world#places'
  put 'reserve', to: 'hello_world#reserve'
  get 'hello_world', to: 'hello_world#index'
  get 'cancel', to: 'hello_world#cancel'
  get 'wedding', to: 'wedding#index'
  get 'guests', to: 'wedding#guests'
  get 'attend', to: 'wedding#attend'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end