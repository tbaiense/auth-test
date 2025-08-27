# syntax=docker/dockerfile:1

FROM mysql:8.4

# Generate the desired locales
RUN microdnf install glibc-langpack-pt

# Set the locale
ENV LANG=pt_BR.utf8
ENV LANGUAGE=pt_BR.utf8
ENV LC_ALL=pt_BR.utf8
RUN ln -s -f /usr/share/zoneinfo/Brazil/East /etc/localtime

COPY sql/* /docker-entrypoint-initdb.d/