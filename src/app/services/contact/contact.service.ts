import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactURL = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

  constructor(private httpClient: HttpClient) {}
  profileData = {};
  sendData = new Subject<any>();

  getData = () => {
    return this.sendData.asObservable();
  };
  setData = (updatedData: any) => {
    this.profileData = updatedData;
    this.sendData.next(updatedData);
  };
  getContact = () => {
    return this.httpClient.get(this.contactURL);
  };
  postContact = (data: any) => {
    return this.httpClient.post(this.contactURL, data).pipe((data) => data);
  };
  createManyContacts = (data: any) => {
    return this.httpClient.put(this.contactURL, data).pipe((data) => data);
  };
  deleteContact = (data: any) => {
    return this.httpClient.delete(this.contactURL, data);
  };
}
