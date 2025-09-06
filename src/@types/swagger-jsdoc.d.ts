declare module "swagger-jsdoc" {
    interface SwaggerJsdocOptions {
        definition: object;
        apis: string[];
    }

    function swaggerJSDoc(options: SwaggerJsdocOptions): object;
    export default swaggerJSDoc;
}
