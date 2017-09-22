@task.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :due, :reward, :completed
  end
end
