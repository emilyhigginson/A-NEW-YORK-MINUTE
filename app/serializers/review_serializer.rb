class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :author, :spot_id, :comment, :spot_name, :latitude, :longitude
end
