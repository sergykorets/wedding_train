class Chair < ApplicationRecord
  belongs_to :user, required: false
  belongs_to :table, required: false
  validates_uniqueness_of :user_id, allow_nil: true
end