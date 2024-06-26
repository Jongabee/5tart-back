import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity({
    name: 'agency'
})
export class AgencyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid()

    @Column()
    name_agency: string

    @Column()
    mail: string

    @Column()
    password: string

    @Column()
    confirm_password: string

    @Column()
    address: string


}