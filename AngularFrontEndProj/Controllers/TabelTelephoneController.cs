using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularFrontEndProj.Data;
using AngularFrontEndProj.Models;

namespace AngularFrontEndProj.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TabelTelephoneController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TabelTelephoneController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _context.TabelTelephone.ToListAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var item = await _context.TabelTelephone.FindAsync(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Create(TabelTelephone model)
        {
            _context.TabelTelephone.Add(model);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = model.Id }, model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TabelTelephone model)
        {
            if (id != model.Id) return BadRequest();
            var exists = await _context.TabelTelephone.AnyAsync(x => x.Id == id);
            if (!exists) return NotFound();
            _context.Entry(model).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var item = await _context.TabelTelephone.FindAsync(id);
            if (item == null) return NotFound();
            _context.TabelTelephone.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
