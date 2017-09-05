Rails.application.routes.draw do
  get 'character_quote/:name/delete', to: "profiles#destroy"

  resources :profiles, only: [:index], as: "character_quote"
end
