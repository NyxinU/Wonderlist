json.task do
  json.extract! @task, :id, :title, :due, :reward, :completed
end 
