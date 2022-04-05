class User < ApplicationRecord
    has_one_attached :avatar
    has_many :reviews, dependent: :destroy
    has_many :spots, through: :reviews
    has_many :favorites
    has_many :favorite_spots, through: :favorites, source: :spot # spots that are favorited
end
