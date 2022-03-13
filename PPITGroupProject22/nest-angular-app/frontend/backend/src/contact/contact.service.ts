import { Injectable } from '@nestjs/common';
//imports nest service that works with contact table - contains CRUD operations to update Database.
import { Repository } from  'typeorm';
import { Repository, UpdateResult, DeleteResult } from  'typeorm';
import { Contact } from  '../entities/contact.entity';

@Injectable()
export class ContactService {
    constructor(
    //@InjectRepository(Contact)
    private contactRepository: Repository<Contact>
) { }

 async create(contact: Contact): Promise<Contact> {
    return await this.contactRepository.save(contact);
}

async  readAll(): Promise<Contact[]> {
    return await this.contactRepository.find();
}

async update(contact: Contact): Promise<UpdateResult> {

    return await this.contactRepository.update(contact.id,contact);
}

async delete(id): Promise<DeleteResult> {
    return await this.contactRepository.delete(id);
}}

