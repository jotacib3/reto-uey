import { setupWorker } from 'msw'
import handlers from './handlers'

/**
 * This function creates a Service Worker with the given request handlers.
*/
const createWorker = async () => {
    if (typeof window !== 'undefined') {
        const worker = setupWorker(...handlers);
        await worker.start();
    }
};

export default createWorker;