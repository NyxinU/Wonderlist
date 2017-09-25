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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
