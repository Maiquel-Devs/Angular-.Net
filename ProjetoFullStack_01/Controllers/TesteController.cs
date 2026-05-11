using Microsoft.AspNetCore.Mvc;

namespace ProjetoFullStack_01.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TesteController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new { msg = "Conexão OK!" });
}
