using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sollar.Migrations
{
    /// <inheritdoc />
    public partial class AdicionadoDataDeRegistro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "data_registro",
                table: "usuario",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "data_registro",
                table: "projeto",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "data_registro",
                table: "usuario");

            migrationBuilder.DropColumn(
                name: "data_registro",
                table: "projeto");
        }
    }
}
