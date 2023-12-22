/* eslint-disable prettier/prettier */
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tags.entity";
import { randomUUID } from "crypto";

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Tag, tag => tag.courses, {
    cascade: true,
  })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @BeforeInsert()
  generateId() {
    if (this.id) {
      return
    }
    this.id = randomUUID()
  }
}