export class City {
  name: string;
  lat: number;
  long: number;
  constructor(name: string, lat: number, long: number) {
    this.name = name;
    this.lat = lat;
    this.long = long;
  }
  getName() {
    return this.name;
  }
  setName(newName: string) {
    this.name = newName;
  }
  setLat(newLat: number) {
    this.lat = newLat;
  }
  setLong(newLong: number) {
    this.long = newLong;
  }
  getCoords() {
    return [this.lat, this.long];
  }
}
