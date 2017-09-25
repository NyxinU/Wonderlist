@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :due, :reward, :completed, :list_id, :user_id
  end
end
