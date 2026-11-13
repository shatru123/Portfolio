FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY src/Portfolio/Portfolio.csproj src/Portfolio/
RUN dotnet restore src/Portfolio/Portfolio.csproj
COPY . .
RUN dotnet publish src/Portfolio/Portfolio.csproj -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
ENV ASPNETCORE_URLS=http://0.0.0.0:10000
EXPOSE 10000
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Portfolio.dll"]
