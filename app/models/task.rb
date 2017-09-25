# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  list_id    :integer
#  due        :date
#  reward     :string
#  completed  :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id  :integer
#

class Task < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :completed, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :list, optional: true 
end
