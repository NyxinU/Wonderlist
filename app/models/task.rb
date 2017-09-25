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
#

class Task < ApplicationRecord
  validates :title, presence: true
  validates :completed, inclusion: { in: [true, false] }

  belongs_to :list
end
