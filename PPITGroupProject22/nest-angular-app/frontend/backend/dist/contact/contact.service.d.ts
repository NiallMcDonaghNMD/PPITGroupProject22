import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Contact } from '../entities/contact.entity';
export declare class ContactService {
    private contactRepository;
    constructor(contactRepository: Repository<Contact>);
    create(contact: Contact): Promise<Contact>;
    readAll(): Promise<Contact[]>;
    update(contact: Contact): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
