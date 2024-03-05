// Archivo tipo Snippet para importarme __dirfile y asi reutilizarlo de manera eficiente
 
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
console.log(__dirname);

export default __dirname