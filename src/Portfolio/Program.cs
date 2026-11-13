var builder = WebApplication.CreateBuilder(args);

// Render assigns the listening port through PORT. Bind to all interfaces.
var port = Environment.GetEnvironmentVariable("PORT");
if (!string.IsNullOrWhiteSpace(port))
{
    builder.WebHost.UseUrls($"http://0.0.0.0:{port}");
}

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Lightweight uptime and platform health probe. No database or external
// dependency is required, so monitoring does not create unnecessary load.
app.MapGet("/health", () => Results.Ok(new
{
    status = "healthy",
    service = "shatrughna-portfolio",
    timestampUtc = DateTimeOffset.UtcNow
})).WithName("Health");

app.MapFallbackToFile("index.html");

app.Run();

// Exposed for integration tests.
public partial class Program { }
