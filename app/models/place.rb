class Place < ApplicationRecord
  belongs_to :user, required: false
  validates_uniqueness_of :user_id, allow_nil: true
end