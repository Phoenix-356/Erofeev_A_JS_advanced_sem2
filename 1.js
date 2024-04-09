"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
  
    constructor(initialBooks) {
      // Проверяем, что переданный массив не содержит дубликатов
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error("Массив начальных книг содержит дубликаты.");
      }
      this.#books = initialBooks;
    }
  
    // Геттер для получения списка всех книг
    get allBooks() {
      return this.#books;
    }
  
    // Метод для добавления книги в список
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
      }
      this.#books.push(title);
    }
  
    // Метод для удаления книги из списка
    removeBook(title) {
      const index = this.#books.indexOf(title);
      if (index === -1) {
        throw new Error(`Книга с названием "${title}" отсутствует в библиотеке.`);
      }
      this.#books.splice(index, 1);
    }
  
    // Метод для проверки наличия книги в библиотеке
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  // Пример использования класса Library
  const library = new Library(["Book 1", "Book 2", "Book 3"]);
  
  console.log(library.allBooks); // ["Book 1", "Book 2", "Book 3"]
  
  library.addBook("Book 4");
  console.log(library.allBooks); // ["Book 1", "Book 2", "Book 3", "Book 4"]
  
  library.removeBook("Book 2");
  console.log(library.allBooks); // ["Book 1", "Book 3", "Book 4"]
  
  console.log(library.hasBook("Book 1")); // true
  console.log(library.hasBook("Book 5")); // false
  