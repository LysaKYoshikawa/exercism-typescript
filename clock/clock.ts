export class Clock {
  private hours: number;
  private minutes: number;

  constructor(hour: number, minute: number = 0) {
    // Normaliza os minutos para garantir que estejam no intervalo [0, 59]
    const normalizedMinute = (minute % 60 + 60) % 60;

    // Calcula os minutos excedentes após a normalização
    const overflowHours = Math.floor(minute / 60);

    // Soma as horas iniciais e as horas excedentes após a normalização
    this.hours = (hour + overflowHours) % 24;

    // Adiciona 24 horas se o resultado for negativo
    this.hours = (this.hours + 24) % 24;

    // Atribui os minutos normalizados
    this.minutes = normalizedMinute;
  }

  public toString(): string {
    // Formata as horas e minutos com dois dígitos cada
    const formattedHours = this.hours.toString().padStart(2, '0');
    const formattedMinutes = this.minutes.toString().padStart(2, '0');

    // Retorna a representação em string do relógio no formato "hh:mm"
    return `${formattedHours}:${formattedMinutes}`;
  }

  public plus(minutes: number): Clock {
    // Cria uma cópia do relógio atual
    const newClock = new Clock(this.hours, this.minutes);

    // Adiciona os minutos fornecidos
    newClock.minutes += minutes;

    // Atualiza as horas e minutos após a adição
    return newClock.normalize();
  }

  public minus(minutes: number): Clock {
    // Cria uma cópia do relógio atual
    const newClock = new Clock(this.hours, this.minutes);

    // Subtrai os minutos fornecidos
    newClock.minutes -= minutes;

    // Atualiza as horas e minutos após a subtração
    return newClock.normalize();
  }

  public equals(other: Clock): boolean {
    // Verifica se as horas e minutos são iguais
    return this.hours === other.hours && this.minutes === other.minutes;
  }

  private normalize(): Clock {
    // Normaliza os minutos
    const normalizedMinute = (this.minutes % 60 + 60) % 60;

    // Calcula os minutos excedentes após a normalização
    const overflowHours = Math.floor(this.minutes / 60);

    // Soma as horas e os minutos excedentes após a normalização
    this.hours = (this.hours + overflowHours) % 24;

    // Adiciona 24 horas se o resultado for negativo
    this.hours = (this.hours + 24) % 24;

    // Atribui os minutos normalizados
    this.minutes = normalizedMinute;

    return this;
  }
}
