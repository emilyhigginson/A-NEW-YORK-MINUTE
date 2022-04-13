class Review < ApplicationRecord
    belongs_to :user
    belongs_to :spot 

    def spot_name
        self.spot.name
      end

end
