export const PoemasPage = () => {
  const downloadTextFile = (filename: string, text: string) => {
    // Создаём Blob с текстом
    const blob = new Blob([text], { type: 'text/plain' });

    // Создаём временную ссылку
    const url = URL.createObjectURL(blob);

    // Программно "кликаем" по ссылке для скачивания
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Имя файла, например "gumilev_poem.txt"
    a.click();

    // Освобождаем память
    URL.revokeObjectURL(url);
  };

  // Пример использования
  const poem = `
        Жираф
      
        Сегодня, я вижу, особенно грустен твой взгляд,
        И руки особенно тонки, колени обняв.
        Послушай: далёко, далёко, на озере Чад
        Изысканный бродит жираф.
      `;

  return (
    <>
      <button
        onClick={() => downloadTextFile('gumilev_poem.txt', poem.trim())}>Save (and sound)</button>
    </>
  );
};
