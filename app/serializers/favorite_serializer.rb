class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :spot_id
end
