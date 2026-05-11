var builder = WebApplication.CreateBuilder(args);

// 1. Adiciona suporte aos Controllers (essencial para as APIs)
builder.Services.AddControllers();

// 2. Configura o CORS (Permite que o Angular acesse o .NET)
builder.Services.AddCors(options => {
    options.AddPolicy("AngularPolicy", policy => {
        policy.WithOrigins("http://localhost:4200") // Porta do Angular
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// 3. Ativa o CORS e mapeia os Controllers
app.UseCors("AngularPolicy");
app.MapControllers();

app.Run();