class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :avatar, :favorite_spots, :spots
end
