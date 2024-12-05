import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { NextFunction } from "express";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger(LoggerMiddleware.name);
    use(req: Request, res: Response, next: NextFunction) {
        // TODO: log actual 
        this.logger.log('Request received ' + req.credentials);
        if (!req.headers.has('X-REQUEST-ID')) {
            req.headers.set('X-REQEUST-ID', uuidv4())
        }
        if (!req.headers.has('X-TRACE-ID')) {
            req.headers.set('X-TRACE-ID', uuidv4())
        }
        if (!req.headers.has('X-SPAN-ID')) {
            req.headers.set('X-SPAN-ID', uuidv4())
        }
        next();
    }
}