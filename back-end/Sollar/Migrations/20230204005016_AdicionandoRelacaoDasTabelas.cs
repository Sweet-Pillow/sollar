using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sollar.Migrations
{
    /// <inheritdoc />
    public partial class AdicionandoRelacaoDasTabelas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "id_usuario",
                table: "projeto",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_projeto_id_usuario",
                table: "projeto",
                column: "id_usuario");

            migrationBuilder.AddForeignKey(
                name: "FK_projeto_usuario_id_usuario",
                table: "projeto",
                column: "id_usuario",
                principalTable: "usuario",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_projeto_usuario_id_usuario",
                table: "projeto");

            migrationBuilder.DropIndex(
                name: "IX_projeto_id_usuario",
                table: "projeto");

            migrationBuilder.DropColumn(
                name: "id_usuario",
                table: "projeto");
        }
    }
}
