module.exports = {
	ci: {
		collect: {
			url: ['http://localhost:3000', 'http://localhost:3000/test'], // Укажите страницы для тестирования
			numberOfRuns: 3, // Количество прогонов для средней метрики
			startServerCommand: 'npm run start', // Команда для запуска вашего сервера
			startServerReadyPattern: 'ready - started server', // Паттерн для ожидания готовности сервера
			port: 3000, // Явно указываем порт 3000
		},
		assert: {
			assertions: {
				'categories:performance': ['error', { minScore: 0.9 }], // Устанавливаем критерий для оценки производительности
			},
		},
		upload: {
			target: 'temporary-public-storage', // Опция для хранения отчётов (можно настроить иначе)
		},
	},
};
