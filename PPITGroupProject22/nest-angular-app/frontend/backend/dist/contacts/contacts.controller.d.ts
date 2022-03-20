import { ContactService } from '../contact/contact.service';
import { Contact } from '../entities/contact.entity';
export declare class ContactsController {
    private contactService;
    constructor(contactService: ContactService);
    read(): Promise<Contact[]>;
    create(contact: Contact): Promise<any>;
    update(id: any, contact: Contact): Promise<any>;
    delete(id: any): Promise<any>;
}
