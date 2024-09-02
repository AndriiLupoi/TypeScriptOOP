export interface Animal {
    name: string;              // Ім'я тварини
    age?: number;              // Вік тварини, опціонально
    move(): void;              // Спосіб пересування
    makeSound?(): void;        // Звук, що видає тварина, опціонально
}