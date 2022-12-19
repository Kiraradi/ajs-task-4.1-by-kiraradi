// Проверяет уровень здоровья и возвращает ответ в виде одной из строк: healthy, wounded, critical
export default function checkHealth(data) {
  if (data.health >= 50) {
    return 'healthy';
  } if (data.health < 50 && data.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
