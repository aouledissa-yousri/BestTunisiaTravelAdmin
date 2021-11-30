import { Comment } from "./comment"

export class Destination{
    constructor(
        public id: number,
        public image: string,
        public name: string,
        public prize: number,
        public promotion: boolean,
        public recent: boolean,
        public category: string[],
        public comments: Comment[],
        public description: string,
        public reservations: number
    ){}
}