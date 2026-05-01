import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: 'terser', // Минифицируем код для уменьшения размера
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor'; // Вынесем зависимости в отдельный файл
                    }
                }
            }
        },
        target: 'esnext', // Указываем, на какую версию JS ориентироваться
        sourcemap: true, // Включаем карты кода для отладки
        cssCodeSplit: true // Разделяем CSS на отдельные файлы
    }
});