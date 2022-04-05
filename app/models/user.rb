class User < ApplicationRecord
    has_many :reviews
    has_many :spots, through: :reviews
end
